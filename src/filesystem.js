import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const FILE_NAME = 'database.json';

// Сохранение данных в JSON-файл по ключу
export async function saveData(key, value) {
  try {
    let dataObj = {};

    // Пытаемся прочитать существующий файл
    try {
      const result = await Filesystem.readFile({
        path: FILE_NAME,
        directory: Directory.Data,
        encoding: Encoding.UTF8,
      });
      dataObj = JSON.parse(result.data);
    } catch (err) {
      // Если файл не найден — создаём новый объект
      dataObj = {};
    }

    // Устанавливаем или обновляем ключ
    dataObj[key] = value;

    // Сохраняем обратно в файл
    await Filesystem.writeFile({
      path: FILE_NAME,
      data: JSON.stringify(dataObj, null, 2), // красиво форматируем
      directory: Directory.Data,
      encoding: Encoding.UTF8,
    });

  } catch (err) {
    alert('Ошибка при сохранении файла: ' + err);
  }
}

// Получение данных по ключу из JSON-файла
export async function getData(key) {
  try {
    const result = await Filesystem.readFile({
      path: FILE_NAME,
      directory: Directory.Data,
      encoding: Encoding.UTF8,
    });

    const dataObj = JSON.parse(result.data);

    if (key in dataObj) {
      return dataObj[key];
    } else {
      throw new Error(`Ключ "${key}" не найден в файле`);
    }

  } catch (err) {
    alert('Ошибка при чтении файла: ' + err);
    return null;
  }
}
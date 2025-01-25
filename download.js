// Список файлов для скачивания
const files = [
    // Здесь будут ваши файлы, например:
    // { name: 'документ1.pdf', path: 'files_for_colleagues/документ1.pdf' },
    // { name: 'презентация.pptx', path: 'files_for_colleagues/презентация.pptx' },
];

function downloadAll() {
    // Если нет файлов, показываем сообщение
    if (files.length === 0) {
        alert('В данный момент нет доступных файлов');
        return;
    }

    // Для каждого файла создаем ссылку и эмулируем клик
    files.forEach(file => {
        const link = document.createElement('a');
        link.href = file.path;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

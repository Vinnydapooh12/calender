// Laden der gespeicherten Daten beim Start der Seite
window.onload = function() {
    const scheduleBody = document.getElementById('schedule-body');
    const savedSchedule = localStorage.getItem('schedule');

    if (savedSchedule) {
        scheduleBody.innerHTML = savedSchedule;
    }

    // Füge Event Listener für die Änderung der Zellen hinzu
    scheduleBody.addEventListener('input', function() {
        const scheduleData = scheduleBody.innerHTML;
        localStorage.setItem('schedule', scheduleData);
    });
};

// Speichern der eingegebenen Stunden
function saveSchedule() {
    const scheduleBody = document.getElementById('schedule-body');
    const scheduleData = scheduleBody.innerHTML;
    localStorage.setItem('schedule', scheduleData);
    // Anzeigen einer Bestätigungsnachricht
    alert('Stundenplan wurde gespeichert!');
}
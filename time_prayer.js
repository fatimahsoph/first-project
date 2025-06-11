async function fetchPrayerTimes() {
  try {
    const res = await fetch('https://prayer-times-in-egypt.p.rapidapi.com/prayer?gov=1', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '1687b73818msh62dc3b3f2fa112cp1efc62jsn034b9de7b9b6',
        'x-rapidapi-host': 'prayer-times-in-egypt.p.rapidapi.com'
      }
    });

    const data = await res.json();
    console.log(data); // لمعاينة البيانات الكاملة في الكونسول

    const prayer = data['prayer-timees'];

    document.getElementById('city').textContent = prayer.city;
    document.getElementById('date').textContent = prayer.date;
    document.getElementById('fajr').textContent = prayer.fajr;
    document.getElementById('ishraq').textContent = prayer.Ishraq;
    document.getElementById('dhuhr').textContent = prayer.Dhuhr;
    document.getElementById('asr').textContent = prayer.Asr;
    document.getElementById('maghrib').textContent = prayer.Maghrib;
    document.getElementById('isha').textContent = prayer.Isha;

    document.getElementById('prayer-times').classList.remove('hidden');
  } catch (err) {
    console.error(err);
    alert('حدث خطأ أثناء جلب مواقيت الصلاة.');
  }
}

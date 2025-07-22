document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('purchaseDate');
  const timeInput = document.getElementById('purchaseTime');
  const calculateBtn = document.getElementById('calculateBtn');
  const resultSection = document.getElementById('result');
  const purchaseDisplay = document.getElementById('purchaseDisplay');
  const etaDisplay = document.getElementById('etaDisplay');

  calculateBtn.addEventListener('click', () => {
    const date = dateInput.value;
    const time = timeInput.value;

    if (!date || !time) {
      alert('Mohon isi tanggal dan jam pembelian terlebih dahulu.');
      return;
    }

    try {
      const fullDate = new Date(`${date}T${time}:00`);
      const options = {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };

      const purchaseFormatted = new Intl.DateTimeFormat('en-US', options).format(fullDate);
      const eta = new Date(fullDate.getTime() + 120 * 60 * 60 * 1000); // 5 hari / 120 jam
      const etaFormatted = new Intl.DateTimeFormat('en-US', options).format(eta);

      purchaseDisplay.textContent = `Tanggal & Waktu Pembelian (ET): ${purchaseFormatted}`;
      etaDisplay.textContent = `Estimasi Kedatangan Robux (ET): ${etaFormatted}`;

      resultSection.classList.remove('hidden');
    } catch (error) {
      console.error('Terjadi kesalahan saat menghitung estimasi:', error);
      alert('Terjadi kesalahan saat menghitung. Silakan coba lagi.');
    }
  });
});

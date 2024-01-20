const formatContentMarsWeather = async (content: any) => {
  let tweet: string =
    'Martian weather for Sol ' +
    content.sol +
    ' (' +
    formatDate(content.terrestrial_date) +
    '):\n\n' +
    '🌡️ Min Temp: ' +
    content.min_temp +
    '°C\n' +
    '🌡️ Max Temp: ' +
    content.max_temp +
    '°C\n' +
    '🌬️ Wind: ' +
    content.wind_speed +
    ' m/s\n' +
    '🌅 Sunrise: ' +
    convertToAmericanTime(content.sunrise) +
    '\n' +
    '🌇 Sunset: ' +
    convertToAmericanTime(content.sunset) +
    '\n' +
    '🌐 Pressure: ' +
    content.pressure +
    ' Pa (' +
    content.pressure_string +
    ')\n' +
    '🔆 Atmospheric : ' +
    content.atmo_opacity +
    '\n' +
    '🌡️ Min GTS Temp: ' +
    content.min_gts_temp +
    '°C\n' +
    '🌡️ Max GTS Temp: ' +
    content.max_gts_temp +
    '°C\n' +
    '🌞 Local UV Irradiance Index: ' +
    content.local_uv_irradiance_index;

  return tweet;
};

export default formatContentMarsWeather;

const formatDate = (inputDate: string): string => {
  // Créer un objet Date à partir de la chaîne de date d'origine
  const dateObject = new Date(inputDate);

  // Options de formatage pour obtenir le nom du mois abrégé et le jour du mois
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  // Utiliser Intl.DateTimeFormat pour formater la date
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    dateObject
  );

  return formattedDate;
};

function convertToAmericanTime(time24: string): string {
  // Diviser la chaîne en heures et minutes
  const [hours, minutes] = time24.split(':');

  // Créer un objet Date pour obtenir le format de 12 heures
  const dateObject = new Date(2000, 0, 1, parseInt(hours), parseInt(minutes));

  // Options de formatage pour obtenir l'heure au format 12 heures avec AM/PM
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  // Utiliser Intl.DateTimeFormat pour formater l'heure
  const formattedTime = new Intl.DateTimeFormat('en-US', options).format(
    dateObject
  );

  return formattedTime;
}

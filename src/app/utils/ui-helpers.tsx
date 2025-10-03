import { BadgeState } from '../ui/shared/badge/Badge';


export function assignBadgeStyle(caseText: string) {
  const caseMap: Record<string, BadgeState> = {
  
    geothermal: BadgeState.prepaid,
    'under construction': BadgeState.active,
  };

  return caseMap[caseText?.toLowerCase()] || BadgeState.primary;
}


export function isNumberPresent(str: string) {
  const regex = /\d+/;
  if (regex.test(str)) {
    return true;
  }
  return false;
}

export function checkStringLength(str: string, len: number) {
  if (str && str.length >= len) {
    return true;
  }
  return false;
}

export function checkForUpperCase(str: string) {
  const regex = /[A-Z]/;
  if (regex.test(str)) {
    return true;
  }
  return false;
}

export function checkForSpecialCharacter(str: string) {
  const regex = /[@$%*&^!]/;
  if (regex.test(str)) {
    return true;
  }
  return false;
}

export const ucFirst = (str: string | null | undefined) => {
  // Split the string into an array of words
  const words = str?.toLowerCase().split(' ');

  // Capitalize the first letter of each word
  const capitalizedWords = words?.map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the capitalized words back into a string
  const capitalizedString = capitalizedWords?.join(' ');

  return capitalizedString;
};

export const removeUnderScores = (inputString: string | null | undefined) => {
  // Split the string by hyphens and capitalize each word
  const words = inputString
    ?.split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Join the words with spaces
  const formattedString = words?.join(' ');

  return formattedString;
};

// checks the different in days from the current date and date of choice
export const calculateDateDifference = (dateString: string): string => {
  const currentDate: Date = new Date();
  const targetDate: Date = new Date(dateString);
  const differenceMs: number = currentDate.getTime() - targetDate.getTime();

  // Convert difference in milliseconds to days
  const differenceDays: number = Math.floor(
    differenceMs / (1000 * 60 * 60 * 24)
  );

  // Format the result
  let formattedDifference: string = '';
  if (differenceDays === 1) {
    formattedDifference = '1 day';
  } else {
    formattedDifference = `${differenceDays} days`;
  }

  return formattedDifference;
};

export const capitalizedString = (word: string) => {
  // calling charAt() with toUpperCase()
  const Capital_letter = word?.charAt(0).toUpperCase();

  // concatenate the first letter and the remaining string
  const Capital_string = Capital_letter + word?.slice(1);

  return Capital_string;
};


// Function to get the ordinal suffix for a day number
export function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return 'th'; // 4th to 20th
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

// Function to get the ordinal suffix for a day number
export function convertDateToCustomFormat(dateString: string) {
  const date = new Date(dateString);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const time = date.toTimeString().split(' ')[0];

  const dayWithOrdinal = day + getOrdinalSuffix(day);

  return `${month} ${dayWithOrdinal}, ${year}, ${time}`;
}

export function convertDateToDayFrequency(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate();

  const dayWithOrdinal = day + getOrdinalSuffix(day);

  return `${dayWithOrdinal}`;
}

export const containsCapitalLetter = (inputString?: string) => {
  if (inputString) {
    for (const char of inputString) {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        return true;
      }
    }
  }
  return false;
};

export const containsSpecialCharacter = (inputString?: string): boolean => {
  if (inputString) {
    const specialCharacters = '@$%*&^#!';
    for (const char of inputString) {
      if (specialCharacters.includes(char)) {
        return true;
      }
    }
  }
  return false;
};

export const containsNumber = (inputString?: string): boolean => {
  if (inputString) {
    for (const char of inputString) {
      if (!isNaN(Number(char)) && char !== ' ') {
        return true;
      }
    }
  }
  return false;
};

export const isAtLeast8Characters = (inputString?: string): boolean => {
  if (inputString) {
    return inputString.length >= 8;
  }
  return false;
};


// formate date to 2024-08-08
export const formatDatestring = (isoDate: Date) => {
  const date: any = new Date(isoDate);
  const year: string = date.getFullYear();
  const month: string = String(date.getMonth() + 1).padStart(2, '0');
  const day: string = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatDateToWords = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getUTCFullYear();

  const daySuffix = getOrdinalSuffix(day);

  return `${day}${daySuffix} ${month}, ${year}`;
};

export const convertDate = (dateStr: string) => {
  const date = new Date(dateStr);

  // Get the day, month, and year
  const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Format the date
  return `${day}/${month}/${year}`;
};

export const underscoresRemoval = (inputString: string) => {
  if (inputString === null) return;
  return inputString?.replace(/_/g, ' ');
};

 export const formatNumber = (num: number | string) => {
    if (typeof num === "string") return num;
    return new Intl.NumberFormat().format(num);
  };

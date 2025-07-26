export interface GeolocationProps {
  ip: string;
  city: {
    name: string;
    postalCode: string;
  };
  country: {
    name: string;
    emojiFlag: string;
  };
  coords: {
    latitude: string;
    longitude: string;
  };
}

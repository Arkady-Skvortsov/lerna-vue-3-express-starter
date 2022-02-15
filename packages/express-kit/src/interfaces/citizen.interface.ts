export interface Citizen<T = string> {
  name: T;
  city_id: T;
  groups: [
    {
      country?: T;
      city: T;
      street: T;
    }
  ];
}

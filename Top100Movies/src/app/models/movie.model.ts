export class MovieModel {
  public name: string;
  public castList?: Array<any>;
  public category:
    {
      attributes: object;
    };
  public id: {
    attributes: object,
    label: string
  };
  public 'im:artist': {
    label: string
  };
  public 'im:image': [
    {},
    {},
    {}
    ];
  public 'im:name': {
    label: string
  };
}

namespace web_api.Models.DetailModels;

public class TeacherDetails
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public ContactInformations? ContactInformations { get; set; }
}
using System.ComponentModel.DataAnnotations;

namespace web_api.Models;

public class Teacher
{
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public ContactInformations? ContactInformations { get; set; }
}
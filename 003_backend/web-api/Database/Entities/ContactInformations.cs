using Microsoft.EntityFrameworkCore;

namespace web_api.Models;

[Owned]
public class ContactInformations
{
    public string? ContactPerson { get; set; }
    public string? PhoneNumber { get; set; }
    public string? EmailAddress { get; set; }
    public string? WebAddress { get; set; }
    public string? FaxAddress { get; set; }
}
using Microsoft.EntityFrameworkCore;

namespace web_api.Models;

[Owned]
public class Address
{
    public string StreetAndHouseNumber { get; set; }
    public string PostalCode { get; set; }
    public string City { get; set; }
}
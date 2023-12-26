using System.ComponentModel.DataAnnotations;

namespace web_api.Models;

public class Schedule
{
    [Key]
    public Guid Id { get; set; }
    public string? Notes { get; set; }
    public string Name { get; set; } = string.Empty;
}
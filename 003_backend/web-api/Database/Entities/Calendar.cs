using System.ComponentModel.DataAnnotations;

namespace web_api.Models;

public class Calendar
{
    [Key]
    public Guid Id { get; set; }

    public int SchoolYear { get; set; }
    public bool IsActive { get; set; }
    
    public IList<CalendarEvent> CalendarEvents { get; set; } = new List<CalendarEvent>();
}
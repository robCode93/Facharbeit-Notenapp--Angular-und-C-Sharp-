using System.ComponentModel.DataAnnotations;

namespace web_api.Models;

public class CalendarEvent
{
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string? Notes { get; set; }
    
    public DateOnly StartDate { get; set; }
    public DateOnly EndDate { get; set; }
    
    public CalendarEventType EventType { get; set; }
}
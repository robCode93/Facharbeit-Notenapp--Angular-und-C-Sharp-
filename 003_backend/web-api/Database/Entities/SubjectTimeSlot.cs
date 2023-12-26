using System.ComponentModel.DataAnnotations;

namespace web_api.Models;

public class SubjectTimeSlot
{
    [Key]
    public Guid Id { get; set; }
    
    public TimeSlot TimeSlot { get; set; }
    public Subject Subject { get; set; }
}
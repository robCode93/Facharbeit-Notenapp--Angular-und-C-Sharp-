using System.ComponentModel.DataAnnotations;

namespace web_api.Models;

public class TimeSlot
{
    [Key]
    public Guid Id { get; set; }
    public bool IsActive { get; set; }
    
    public int SlotPlace { get; set; }
    
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
}
namespace web_api.Models;

public class DailySchedule : Schedule
{
    private IList<SubjectTimeSlot> SubjectTimeSlots { get; set; } = new List<SubjectTimeSlot>();
}
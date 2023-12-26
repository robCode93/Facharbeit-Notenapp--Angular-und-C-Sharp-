namespace web_api.Models;

public class WeeklySchedule : Schedule
{
    public IList<DailySchedule> DailySchedules { get; set; } = new List<DailySchedule>();
}
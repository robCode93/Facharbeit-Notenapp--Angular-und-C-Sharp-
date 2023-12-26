using Microsoft.EntityFrameworkCore;

namespace web_api.Models
{
    public class WebAppContext : DbContext
    {
        public WebAppContext(DbContextOptions options) : base(options) { }

        public DbSet<Calendar> Calendars { get; set; }
        public DbSet<CalendarEvent> CalendarEvents { get; set; }
        
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<DailySchedule> DailySchedules { get; set; }
        public DbSet<WeeklySchedule> WeeklySchedules { get; set; }
        
        public DbSet<TimeSlot> TimeSlots { get; set; }
        public DbSet<SubjectTimeSlot> SubjectTimeSlots { get; set; }
        
        public DbSet<Grad> Grads { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        
        public DbSet<SchoolInformations> Schools { get; set; }
    }
}

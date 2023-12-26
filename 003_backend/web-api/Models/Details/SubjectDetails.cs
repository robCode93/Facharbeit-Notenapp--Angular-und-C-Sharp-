namespace web_api.Models.DetailModels
{
    public class SubjectDetails
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? ShortName { get; set; }

        public string? RoomNumber { get; set; }
        
        public TeacherDetails? Teacher { get; set; }
        // Listen der Klasse
        public List<GradDetails>? Grads { get; set; } = new List<GradDetails>();
    }
}

namespace web_api.Models.DetailModels
{
    public class GradDetails
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public int? Points { get; set; }
        public DateTime? Date { get; set; }
        public string? Weight { get; set; }
        public SubjectDetails? Subject { get; set; }
    }
}

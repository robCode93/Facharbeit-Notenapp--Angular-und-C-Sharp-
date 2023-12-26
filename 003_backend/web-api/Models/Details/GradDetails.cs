namespace web_api.Models.DetailModels
{
    public class GradDetails
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string? Notes { get; set; }
        
        public int GradValuePoints { get; set; }
        public decimal GradValueDecimal { get; set; }
        public DateOnly? Date { get; set; }
        public SubjectDetails Subject { get; set; }
        
        public GradWeight GradWeight { get; set; }
    }
}

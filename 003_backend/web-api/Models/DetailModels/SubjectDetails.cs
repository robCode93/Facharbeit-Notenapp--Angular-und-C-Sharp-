namespace web_api.Models.DetailModels
{
    public class SubjectDetails
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? ShortName { get; set; }

        public IList<GradDetails> Grads { get; set; } = new List<GradDetails>();
    }
}

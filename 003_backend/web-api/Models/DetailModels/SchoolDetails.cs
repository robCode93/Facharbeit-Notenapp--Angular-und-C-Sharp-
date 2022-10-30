namespace web_api.Models.DetailModels
{
    public class SchoolDetails
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? FedState { get; set; }

        public IList<HolidayDetails> Holidays { get; set; } = new List<HolidayDetails>();
    }
}

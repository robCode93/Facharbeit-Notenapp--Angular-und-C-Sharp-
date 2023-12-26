using System;
using web_api.Models;
using web_api.Models.DetailModels;

namespace web_api.CRUDModels
{
    public class CreateAndUpdateGradModel
    {
        public string Name { get; set; }
        public string? Notes { get; set; }
        
        public int? GradValuePoints { get; set; }
        public decimal? GradValueDecimal { get; set; }
        public DateOnly? Date { get; set; }
        public Guid SubjectId { get; set; }
        
        public GradWeight GradWeight { get; set; }
    }
}


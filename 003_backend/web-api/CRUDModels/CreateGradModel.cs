using System;
using web_api.Models.DetailModels;

namespace web_api.CRUDModels
{
    public class CreateGradModel
    {
        public string Name { get; set; }
        public int Points { get; set; }
        public DateOnly Date { get; set; }
        public string Weight { get; set; }
        public Guid Subject { get; set; }
    }
}


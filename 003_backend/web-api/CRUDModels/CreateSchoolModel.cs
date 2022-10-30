using System;
using System.ComponentModel.DataAnnotations;
using web_api.Models.DetailModels;

namespace web_api.CRUDModels
{
    public class CreateSchoolModel
    {
        [Required]
        public string Name { get; set; }
        public string FedState { get; set; }

        public List<Guid> Holidays { get; set; } = new List<Guid>();
    }
}


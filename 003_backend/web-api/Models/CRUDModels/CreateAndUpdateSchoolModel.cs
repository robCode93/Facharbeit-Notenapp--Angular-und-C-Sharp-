using System;
using System.ComponentModel.DataAnnotations;
using web_api.Models;
using web_api.Models.DetailModels;

namespace web_api.CRUDModels
{
    public class CreateAndUpdateSchoolModel
    {
        [Required]
        public string Name { get; set; }
        public Address? Address { get; set; }
        public ContactInformations? ContactInformations { get; set; }
    }
}


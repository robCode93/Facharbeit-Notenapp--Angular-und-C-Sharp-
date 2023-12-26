using System;
using System.ComponentModel.DataAnnotations;

namespace web_api.CRUDModels
{
    public class CreateAndUpdateSubjectModel
    {
        [Required]
        public string? Name { get; set; }
        public string? ShortName { get; set; }

        public string? RoomNumber { get; set; }
        
        public Guid? TeacherId { get; set; }

    }
}


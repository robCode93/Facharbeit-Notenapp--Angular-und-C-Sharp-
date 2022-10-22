using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using web_api.Models;
using web_api.Models.DetailModels;
using web_api.Services.ServiceInterfaces;

namespace web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SchoolYearController : ControllerBase
    {
        ISchoolYearService _service;
        
        public SchoolYearController(ISchoolYearService service)
        {
            _service = service;
        }


        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SchoolYear))]
        public IActionResult GetSchoolYearById([FromRoute] Guid id)
        {
            try
            {
                var model = _service.GetSchoolYearById(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SchoolYear[]))]
        public IActionResult GetAllSchoolYears()
        {
            try
            {
                var model = _service.GetAllSchoolYears();
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("{id}/[action]")]
        public IActionResult DeleteSchoolYear([FromRoute] Guid id)
        {
            try
            {
                var model = _service.DeleteSchoolYear(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult SaveSchoolYear(SchoolYear schoolYearModel)
        {
            try
            {
                var model = _service.SaveSchoolYear(schoolYearModel);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("{yearId}/[action]/{subId}")]
        public IActionResult AddSubjectToSchoolYear([FromRoute] Guid yearId, [FromRoute] Guid subId)
        {
            try
            {
                var model = _service.AddSubjectToSchoolYear(yearId, subId);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SubjectDetails[]))]
        public IActionResult GetSubjectsOfSchoolYear([FromRoute] Guid id)
        {
            try
            {
                var model = _service.GetSubjectsOfSchoolYear(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


    }
}

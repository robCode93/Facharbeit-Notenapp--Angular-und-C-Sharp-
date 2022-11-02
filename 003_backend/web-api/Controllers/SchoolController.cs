using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using web_api.CRUDModels;
using web_api.Models;
using web_api.Models.DetailModels;
using web_api.Services.ServiceInterfaces;

namespace web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SchoolController : ControllerBase
    {
        ISchoolService _schoolService;

        public SchoolController(ISchoolService schoolService)
        {
            _schoolService = schoolService;
        }


        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SchoolDetails))]
        public IActionResult GetSchoolById([FromRoute] Guid id)
        {
            try
            {
                var model = _schoolService.GetSchoolById(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SchoolDetails[]))]
        public IActionResult GetAllSchools()
        {
            try
            {
                var model = _schoolService.GetAllSchools();
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(HolidayDetails[]))]
        public IActionResult GetHolidaysOfSchool([FromRoute] Guid id)
        {
            try
            {
                var model = _schoolService.GetHolidaysOfSchool(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult CreateSchool(CreateSchoolModel createModel)
        {
            try
            {
                var model = _schoolService.CreateSchool(createModel);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPatch]
        [Route("[action]/{id}")]
        public IActionResult UpdateSchool([FromRoute] Guid id, UpdateSchoolModel updateModel)
        {
            try
            {
                var model = _schoolService.UpdateSchool(id, updateModel);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("{id}/[action]")]
        public IActionResult DeleteSchool([FromRoute] Guid id)
        {
            try
            {
                var model = _schoolService.DeleteSchool(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


    }
}

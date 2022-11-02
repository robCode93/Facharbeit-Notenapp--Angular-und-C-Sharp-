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
    public class SchoolYearController : ControllerBase
    {
        ISchoolYearService _service;
        
        public SchoolYearController(ISchoolYearService service)
        {
            _service = service;
        }



        // ########## GET-Methoden ##########
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SchoolYearDetails[]))]
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

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SchoolYearDetails))]
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


        // ########## POST-Methoden ##########
        [HttpPost]
        [Route("[action]")]
        public IActionResult CreateSchoolYear(CreateSchoolYearModel createModel)
        {
            try
            {
                var model = _service.CreateSchoolYear(createModel);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        // ########## PATCH-Methoden ##########
        [HttpPatch]
        [Route("[action]/{id}")]
        public IActionResult UpdateSchoolYear([FromRoute] Guid id, UpdateSchoolYearModel updateModel)
        {
            try
            {
                var model = _service.UpdateSchoolYear(id, updateModel);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPatch]
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


        // ########## DELETE-Methoden ##########
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

        

    

    


    }
}

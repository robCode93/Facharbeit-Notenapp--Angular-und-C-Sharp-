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
    public class SubjectController : ControllerBase
    {
        ISubjectService _service;
        
        public SubjectController(ISubjectService service)
        {
            _service = service;
        }


        // ########## GET-Methoden ##########
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SubjectDetails[]))]
        public IActionResult GetAllSubjects()
        {
            try
            {
                var model = _service.GetAllSubjects();
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SubjectDetails))]
        public IActionResult GetSubjectById([FromRoute] Guid id)
        {
            try
            {
                var model = _service.GetSubjectById(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SubjectDetails[]))]
        public IActionResult GetAllActiveSubjects()
        {
            try
            {
                var model = _service.GetAllActiveSubjects();
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
        public IActionResult CreateSubject(CreateAndUpdateSubjectModel createAndUpdateModel)
        {
            try
            {
                var model = _service.CreateSubject(createAndUpdateModel);
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
        public IActionResult UpdateSubject([FromRoute] Guid id, CreateAndUpdateSubjectModel updateModel)
        {
            try
            {
                var model = _service.UpdateSubject(id, updateModel);
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
        public IActionResult DeleteSubject([FromRoute] Guid id)
        {
            try
            {
                var model = _service.DeleteSubject(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }









    }
}

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

        [HttpPost]
        [Route("[action]")]
        public IActionResult CreateSubject(CreateSubjectModel createModel)
        {
            try
            {
                var model = _service.CreateSubject(createModel);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPatch]
        [Route("[action]/{id}")]
        public IActionResult UpdateSubject([FromRoute] Guid id, UpdateSubjectModel updateModel)
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

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(GradDetails[]))]
        public IActionResult GetGradsOfSubject([FromRoute] Guid id)
        {
            try
            {
                var model = _service.GetGradsOfSubject(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{subId}/[action]/{gradId}")]
        public IActionResult AddGradToSubject([FromRoute] Guid subId, [FromRoute] Guid gradId)
        {
            try
            {
                var model = _service.AddGradToSubject(subId, gradId);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }






    }
}

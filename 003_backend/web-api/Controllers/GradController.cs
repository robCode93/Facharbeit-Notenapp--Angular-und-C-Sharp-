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
    public class GradController : ControllerBase
    {
        IGradService gradService;

        public GradController(IGradService gradService)
        {
            this.gradService = gradService;
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(GradDetails))]
        public IActionResult GetGradById([FromRoute] Guid id)
        {
            try
            {
                var model = gradService.GetGradById(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(GradDetails[]))]
        public IActionResult GetAllGrads()
        {
            try
            {
                var model = gradService.GetAllGrads();
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPatch]
        [Route("[action]/{id}")]
        public IActionResult UpdateGrad([FromRoute] Guid id, UpdateGradModel updateModel)
        {
            try
            {
                var model = gradService.UpdateGrad(id, updateModel);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult CreateGrad(CreateGradModel createModel)
        {
            try
            {
                var model = gradService.CreateGrad(createModel);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("{id}/[action]")]
        public IActionResult DeleteGrad([FromRoute] Guid id)
        {
            try
            {
                var model = gradService.DeleteGrad(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

    }
}

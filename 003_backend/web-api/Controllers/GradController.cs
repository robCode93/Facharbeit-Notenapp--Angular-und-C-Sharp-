using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using web_api.Models;
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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Grad))]
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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Grad[]))]
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

        [HttpPost]
        [Route("[action]")]
        public IActionResult SaveGrad(Grad gradModel)
        {
            try
            {
                var model = gradService.SaveGrad(gradModel);
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

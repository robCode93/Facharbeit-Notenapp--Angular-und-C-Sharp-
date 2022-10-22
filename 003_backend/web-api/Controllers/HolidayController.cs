using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using web_api.Models;
using web_api.Services.ServiceInterfaces;

namespace web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HolidayController : ControllerBase
    {
        IHolidayService _service;

        public HolidayController(IHolidayService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Holiday))]
        public IActionResult GetHolidayById([FromRoute] Guid id)
        {
            try
            {
                var model = _service.GetHolidayById(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Holiday[]))]
        public IActionResult GetAllHolidays()
        {
            try
            {
                var model = _service.GetAllHolidays();
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("{id}/[action]")]
        public IActionResult DeleteHoliday([FromRoute] Guid id)
        {
            try
            {
                var model = _service.DeleteHoliday(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult SaveHolidays(Holiday holidayModel)
        {
            try
            {
                var model = _service.SaveHoliday(holidayModel);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


    }
}

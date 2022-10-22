using web_api.Models;

namespace web_api.Services.ServiceInterfaces
{
    public interface IHolidayService
    {
        ResponseModel SaveHoliday(Holiday holidayModel);
        ResponseModel DeleteHoliday(Guid holidayId);
        Holiday GetHolidayById(Guid holidayId);
        List<Holiday> GetAllHolidays();
    }
}

using web_api.Models;

namespace web_api.Services.ServiceInterfaces
{
    public interface ISchoolService
    {
        ResponseModel SaveSchool(School schoolModel);
        ResponseModel DeleteSchool(Guid schoolId);
        List<School> GetAllSchools();
        School GetSchoolById(Guid schoolId);
        List<Holiday> GetHolidaysOfSchool(Guid schoolId);
        Holiday GetHolidayById(Guid holidayId);
    }
}

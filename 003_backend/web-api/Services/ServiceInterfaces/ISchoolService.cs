using web_api.Models;
using web_api.Models.DetailModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface ISchoolService
    {
        ResponseModel SaveSchool(School schoolModel);
        ResponseModel DeleteSchool(Guid schoolId);
        List<School> GetAllSchools();
        School GetSchoolById(Guid schoolId);
        List<HolidayDetails> GetHolidaysOfSchool(Guid schoolId);
    }
}

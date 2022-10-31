using web_api.CRUDModels;
using web_api.Models;
using web_api.Models.DetailModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface ISchoolService
    {
        List<SchoolDetails> GetAllSchools();
        SchoolDetails GetSchoolById(Guid schoolId);
        List<HolidayDetails> GetHolidaysOfSchool(Guid schoolId);

        ResponseModel CreateSchool(CreateSchoolModel createModel);
        ResponseModel UpdateSchool(Guid schoolId, UpdateSubjectModel updateModel);

        ResponseModel DeleteSchool(Guid schoolId);

    }
}

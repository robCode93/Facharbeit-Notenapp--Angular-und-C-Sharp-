using web_api.Models;
using web_api.Models.DetailModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface ISchoolYearService
    {
        ResponseModel SaveSchoolYear(SchoolYear schoolYearModel);
        ResponseModel DeleteSchoolYear(Guid schoolYearId);
        List<SchoolYear> GetAllSchoolYears();
        SchoolYear GetSchoolYearById(Guid schoolYearId);
        ResponseModel AddSubjectToSchoolYear(Guid schoolYearId, Guid subjectId);
        List<SubjectDetails> GetSubjectsOfSchoolYear(Guid schoolYearId);
    }
}

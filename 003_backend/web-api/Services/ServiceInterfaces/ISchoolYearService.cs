using web_api.Models;
using web_api.Models.DetailModels;
using web_api.CRUDModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface ISchoolYearService
    {
        List<SchoolYearDetails> GetAllSchoolYears();
        SchoolYearDetails GetSchoolYearById(Guid schoolYearId);
        List<SubjectDetails> GetSubjectsOfSchoolYear(Guid schoolYearId);

        ResponseModel CreateSchoolYear(CreateSchoolYearModel createModel);
        ResponseModel UpdateSchoolYear(Guid schoolYearId, UpdateSchoolYearModel updateModel);

        ResponseModel AddSubjectToSchoolYear(Guid schoolYearId, Guid subjectId);
        ResponseModel DeleteSchoolYear(Guid schoolYearId);
    }
}

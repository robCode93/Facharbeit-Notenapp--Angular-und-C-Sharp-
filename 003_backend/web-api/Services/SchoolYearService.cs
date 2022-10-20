using web_api.Models;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services
{
    public class SchoolYearService : ISchoolYearService
    {
        public ResponseModel AddSubjectToSchoolYear(Guid schoolYearId, Guid subjectId)
        {
            throw new NotImplementedException();
        }

        public ResponseModel DeleteSchoolYear(Guid schoolYearId)
        {
            throw new NotImplementedException();
        }

        public List<SchoolYear> GetAllSchoolYears()
        {
            throw new NotImplementedException();
        }

        public SchoolYear GetSchoolYearById(Guid schoolYearId)
        {
            throw new NotImplementedException();
        }

        public List<Subject> GetSubjectsOfSchoolYear(Guid schoolYear)
        {
            throw new NotImplementedException();
        }

        public ResponseModel SaveSchoolYear(SchoolYear schoolYearModel)
        {
            throw new NotImplementedException();
        }
    }
}

using web_api.Models;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services
{
    public class SubjectService : ISubjectService
    {
        public ResponseModel AddGradToSubject(Guid subjectId, Grad gradModel)
        {
            throw new NotImplementedException();
        }

        public ResponseModel DeleteSubject(Guid subjectId)
        {
            throw new NotImplementedException();
        }

        public List<Subject> GetAllSubjects()
        {
            throw new NotImplementedException();
        }

        public List<Grad> GetGradsOfSubject(Guid subjectId)
        {
            throw new NotImplementedException();
        }

        public Subject GetSubjectById(Guid subjectId)
        {
            throw new NotImplementedException();
        }

        public ResponseModel SaveSubject(Subject subjectModel)
        {
            throw new NotImplementedException();
        }
    }
}

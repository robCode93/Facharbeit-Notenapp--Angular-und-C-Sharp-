using web_api.Models;

namespace web_api.Services.ServiceInterfaces
{
    public interface ISubjectService
    {
        ResponseModel SaveSubject(Subject subjectModel);
        ResponseModel DeleteSubject(Guid subjectId);
        Subject GetSubjectById(Guid subjectId);
        List<Subject> GetAllSubjects();
        List<Grad> GetGradsOfSubject(Guid subjectId);
        ResponseModel AddGradToSubject(Guid subjectId, Grad gradModel);
    }
}

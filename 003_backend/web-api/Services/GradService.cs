using Microsoft.EntityFrameworkCore;
using web_api.CRUDModels;
using web_api.Models;
using web_api.Models.DetailModels;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services
{
    public class GradService : IGradService
    {

        private WebAppContext _context;

        public GradService(WebAppContext context)
        {
            _context = context;
        }

        // GET-Methoden
        public List<GradDetails>? GetAllGrads()
        {
            List<GradDetails> detailList = new List<GradDetails>();

            var gradList = _context.Grads.Include(g => g.Subject).ToList();

            foreach(Grad grad in gradList)
            {
                GradDetails details = new GradDetails();
                details.Name = grad.Name;
                details.Points = grad.Points;
                details.Weight = grad.Weight;
                details.Id = grad.Id;

                SubjectDetails subjectDetails = new SubjectDetails();
                subjectDetails.Id = grad.Subject.Id;
                subjectDetails.Name = grad.Subject.Name;
                subjectDetails.ShortName = grad.Subject.ShortName;

                details.Subject = subjectDetails;

                detailList.Add(details);

            }

            return detailList;
        }

        public GradDetails? GetGradById(Guid gradId)
        {
            var grad = _context.Grads.Include(g => g.Subject).FirstOrDefault(g => g.Id == gradId);

            GradDetails details = new GradDetails();

            if(grad == null)
            {
                return null;
            }

            details.Name = grad.Name;
            details.Points = grad.Points;
            details.Weight = grad.Weight;
            details.Id = grad.Id;

            SubjectDetails subjectDetails = new SubjectDetails();
            subjectDetails.Id = grad.Subject.Id;
            subjectDetails.Name = grad.Subject.Name;
            subjectDetails.ShortName = grad.Subject.ShortName;

            details.Subject = subjectDetails;

            return details;
        }

        // CREATE und UPDATE
        public ResponseModel CreateGrad(CreateGradModel createModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                Grad grad = new Grad();
                grad.Name = createModel.Name;
                grad.Points = createModel.Points;
                grad.Weight = createModel.Weight;
                grad.Subject = _context.Subjects.FirstOrDefault(s => s.Id == createModel.Subject);

                _context.Grads.Add(grad);
                _context.SaveChanges();

                model.IsSuccess = true;
                model.Message = "Grad added successfully";

            }
            catch(Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            return model;
        }

        public ResponseModel UpdateGrad(Guid gradId, UpdateGradModel updateModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var _temp = _context.Grads.Include(g => g.Subject).FirstOrDefault(g => g.Id == gradId);

                if(_temp == null)
                {
                    model.IsSuccess = false;
                    model.Message = "Grad not found";
                    return model;
                }

                _temp.Name = updateModel.Name;
                _temp.Points = updateModel.Points;
                _temp.Weight = updateModel.Weight;


                model.IsSuccess = true;
                model.Message = "Grad updated successfully";

                _context.Update(_temp);
                _context.SaveChanges();

            }
            catch(Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            return model;
        }


        // DELETE 
        public ResponseModel DeleteGrad(Guid gradId)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var grad = _context.Grads.FirstOrDefault(g => g.Id == gradId);
                
                if (grad != null)
                {
                    _context.Grads.Remove(grad);
                    _context.SaveChanges();

                    model.IsSuccess = true;
                    model.Message = "Grad removed successfully";
                }
                else
                {
                    model.IsSuccess = false;
                    model.Message = "Grad not found";
                }
            }
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            _context.SaveChanges();
            return model;
        }



            }
}

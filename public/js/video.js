<%- include('../public/partials/header.ejs');%>

<body>
	<div class="tm-page-wrap mx-auto">
		<div class="position-relative">
			<%-include('../public/partials/navbar.ejs'); %>
			<div class="tm-welcome-container tm-fixed-header tm-fixed-header-1">
				<div class="text-center">
					<p class="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 text-white mx-auto">Background image can
						be fixed. Content will simply slide over.</p>
				</div>
			</div>

			<!-- Header image -->
			<div id="tm-fixed-header-bg"></div>
		</div>

		<!-- Page content -->
		<div class="container-fluid">
			<div class="mx-auto tm-content-container">
				<main>
					<div class="tz-gallery">
					<div class="row mb-5 pb-4">
						
						<% for (photo of AllPhoto){%> 
							<div class="col-lg-4 col-md-6 ma_bottom30">
								<div class="lightbox">
								   <img src="<%=photo.url? photo.url : 'https://dummyimage.com/454X300.png/ccc/000&text=NO IMAGE'%>" alt="Bridge">
								   <div class="view_main">
									 <div class="pose">
									 <a class="read_more" href="/photos/read-more?id=<%=photo._id%>">
										<img src="<%=photo.url? photo.url : 'https://dummyimage.com/100X100/ccc/000&text=NO IMAGE'%>" class="read_more" alt="#"/></a>
									 <p><%= photo.name %><br><%= photo.fileTitle %> </p>
								   </div>
								   </div>
								</div>
							 </div>	
						<%}%>
					</div>
				</div>

					<div class="text-center">
						<button class="btn btn-primary mb-4 " data-toggle="modal" data-target="#exampleModal"><span>Add
								Photo</span></button>
					</div>

				</main>
				
				<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
					aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h1 class="modal-title" id="exampleModalLabel">Picture Upload Form</h1>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<form action="/photos/create" id="fileForm" method="post" enctype="multipart/form-data">
								<div class="modal-body">

									<div class="form-group mt-4">
										<div class="col-12">
											<input type="text" class="form-control" name="fileTitle" id="fileTitle"
												placeholder="Picture Title">
										</div>
									</div>
									<div class="form-group">
										<label for="inputFile"></label>
										<input type="file" class="form-control-file ml-4" name="image">
									</div>

								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary tm-btn-small" data-dismiss="modal">İptal</button>
									<button type="submit" class="btn btn-primary tm-btn-small"> Save</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<!-- Subscribe form and footer links -->
				<%- include('../public/partials/footer.ejs'); %></div>
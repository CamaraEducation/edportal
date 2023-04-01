<!-- Topic add Model -->
<div class="modal fade" id="topicAddModal" tabindex="-1" role="dialog" aria-labelledby="topicAddModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
		<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title" id="topicAddModalLabel">Add a Topic</h5>
			<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="modal-body">
			<form name="addTopic">
				<div class="form-group">
					<label for="topicName">Topic Name</label>
					<input type="text" class="form-control" id="topicName" name="topicName" placeholder="Enter Topic Name">
				</div>
				<div class="form-group">
					<label for="topicDescription">Topic Description</label>
					<textarea class="form-control" id="topicDescription" name="topicDescription" placeholder="Topic Description" rows="3"></textarea>
				</div>
				<div class="form-group">
					<label for="topicCategory">Topic Type</label>
					<select class="form-control" id="topicCategory" name="topicCategory" onchange="topicChange()">
						<option value="">Does Topic has subtopics</option>
						<option value="detached">Yeah</option>
						<option value="independent">Nope</option>
					</select>
				</div>
				<div class="form-group" id="topicNope" hidden>
					<div class="row row-editor">
						<div class="editor-container">
							<textarea class="editor" id="topicContent"></textarea>
						</div>
					</div>
				</div>
			</form>
		</div>
		<div class="modal-footer justify-content-center">
			<button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
			<button type="button" class="btn btn-primary btn-sm" id="addNewTopic">Save changes</button>
		</div>
		</div>
	</div>
</div>

<!-- Topic edit Model -->
<div class="modal fade" id="topicEditModal" tabindex="-1" role="dialog" aria-labelledby="topicEditModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-fullscreen" role="document">
		<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title" id="topicEditModalLabel">Edit Topic: <span id="topicEditTitle"></span></h5>
			<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-4">
					<div id="subsList"></div>
				</div>
				<div class="col-md-8">
					<div class="editor-container">
						<div class="editor1" id="topicEditData">
							<h1>hello there</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-footer justify-content-center">
			<button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
			<button type="button" class="btn btn-primary btn-sm" id="editTopic">Save changes</button>
		</div>
	</div>
</div>